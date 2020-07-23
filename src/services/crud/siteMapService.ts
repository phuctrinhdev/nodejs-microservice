import { CrudService, ICrudOption } from '../crudService.pg'

import {
    sequelize, Product, ProductShop
} from '@/models'
import axios from 'axios';
import {
    tokenService,
    firebaseService,
    errorService
} from '@/services'
import { config } from '@/config'
const fs = require('fs')
const convert = require('xml-js')
const moment = require('moment')
const util = require('util');
const exec = util.promisify(require('child_process').exec);

export class SiteMapService extends CrudService<any> {
    untrackedUrlsList: any = [];
    constructor() {
        super(undefined)
    }
    async createSiteMap() {
        try {
            const host = 'https://ritewine.com';
            const list_products_from_vivino = await this.exec(Product.findAndCount({
                where: {
                    crawl_from: 'VIVINO',
                    not_in_use: false,
                    maybe_duplicate: false
                }
            }));
            if (list_products_from_vivino.count > 0) {
                list_products_from_vivino.rows.forEach((element: any) => {
                    this.untrackedUrlsList.push(`${host}/${element.slug}`);
                });
                await this.filterUniqueURLs();
                fs.copyFile('./sitemap.xml', './now-crawler-client/dist/sitemap.xml', (err: any) => {
                    if (err) {
                        throw err;
                    }
                });
                await this.childProcess();
            }
        } catch (error) {
            throw error;
        }
    }
    async filterUniqueURLs() {
        try {
            fs.readFile('./sitemap.xml', { encoding: 'utf8' }, async (err: any, data: any) => {
                if (err) {
                    throw err;
                }
                if (data) {
                    let existingSitemapList = JSON.parse(convert.xml2json(data, { compact: true, spaces: 4 }));
                    existingSitemapList.urlset.url = [];
                    this.untrackedUrlsList.forEach((ele: any) => {
                        existingSitemapList.urlset.url.push({
                            loc: {
                                _text: ele,
                            },
                            changefreq: {
                                _text: 'daily'
                            },
                            priority: {
                                _text: 0.8
                            },
                            lastmod: {
                                _text: moment(new Date()).format('YYYY-MM-DD')
                            }
                        });
                    });
                    existingSitemapList.urlset.url.unshift(
                        {
                            loc: {
                                _text: 'https://ritewine.com/',
                            },
                            changefreq: {
                                _text: 'daily'
                            },
                            priority: {
                                _text: 0.8
                            },
                            lastmod: {
                                _text: moment(new Date()).format('YYYY-MM-DD')
                            }
                        },
                        {
                            loc: {
                                _text: 'https://ritewine.com/faqs',
                            },
                            changefreq: {
                                _text: 'daily'
                            },
                            priority: {
                                _text: 0.8
                            },
                            lastmod: {
                                _text: moment(new Date()).format('YYYY-MM-DD')
                            }
                        },
                    );
                    await this.createSitemapFile(existingSitemapList);
                }
            });
        } catch (error) {
            throw error;
        }
    }
    async createSitemapFile(existingSitemapList: any) {
        try {
            const finalXML = convert.json2xml(existingSitemapList, { compact: true, spaces: 4 }); // to convert json text to xml text
            this.saveNewSitemap(finalXML);
        } catch (error) {
            throw error;
        }
    }
    async saveNewSitemap(finalXML: any) {
        try {
            fs.writeFile('sitemap.xml', finalXML, (err: any) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
            });
        } catch (error) {
            throw error;
        }
    }
    async childProcess() {
        //folder in localhost
        //const { stdout, stderr } = await exec('firebase use crawler-client & firebase deploy', { cwd: '/Users/hoangphuc/nowcrawler/now-crawler-client/dist' });
        //folder in vps
        const { stdout, stderr } = await exec('firebase login --no-localhost & firebase deploy --project crawler-client-9c5ea', { cwd: '/var/www/nowcrawler/now-crawler-client/dist' });
    }
}