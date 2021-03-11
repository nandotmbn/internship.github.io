import React, { Component } from 'react';
import ArticleCard from './ArticleCard/ArticleCard'
import {Row} from 'react-materialize'
import './ArticleBox.css'
import './Screen.css'

import NEXT from './assets/next.png'
import NEWS from './assets/news.jpg'

class ArticleBox extends Component {
    render() {
        return (
            <div id="article-box">
                <h2>Artikel Terbaru</h2>
                <Row>
                    <ArticleCard
                        thumbnail={NEWS}
                        bait="Juara umum KRTI diraih ITS, Lihat seluruh pemenangnya"
                    >
                    </ArticleCard>
                    <ArticleCard
                        thumbnail={NEWS}
                        bait="Daftar beasiswa yang diberikan industri untuk para mahasiswa"
                    >
                    </ArticleCard>
                    <ArticleCard
                        thumbnail={NEWS}
                        bait="Ini dia perbedaan antara pendidikan non-vokasi dan pendidikan vokasi"
                    >
                    </ArticleCard>
                    <ArticleCard
                        thumbnail={NEXT}
                        bait="SEE MORE>>>>>"
                    >
                    </ArticleCard>
                </Row>
            </div>
        );
    }
}

export default ArticleBox;