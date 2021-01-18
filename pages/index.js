import {MainLayout} from "../components/MainLayout";
import Image from "next/image";

export default function Home() {
  return (
      <MainLayout title={'Главная'}>
          <div className="container has--poster">
              <div className="poster">
                  <div className="poster__texts">
                      <h2>Брать и просто переводить</h2>
                      <p>тогда берем и читаем</p>
                  </div>
                  <div className="poster__image">
                      <Image
                          src='/images/poster.png'
                          alt='lorem'
                          className="img-responsive"
                          width={200}
                          height={200}
                      />
                  </div>
            </div>
        </div>
      <div className='container'>
          <div className="posts__list">
              <div className="posts__list__item top">
                  <div className="item__text">
                      <h3>Постер для дома</h3>
                      <p>Краткий гайд по созданию кастомной постерной темы, и то что нам понадобиться. Как дела будут
                          обстоять с подходами инструментами и утт вопрос текста в принципе тут вопрос так себе давай
                          попробую просто подсчитать сколько мне нужно текста для нормального вывода текста</p>
                      <div className="item__text__info">
                          <time>27.12.2020</time>
                          <a href="">Читать</a>
                      </div>
                  </div>
                  <img src="images/posts/test_img.jpg" alt=""/>
              </div>
              <div className="posts__list__item small left">
                  <div className="item__img">
                      <Image
                          src='/images/posts/0test_img.jpg'
                          alt='lorem'
                          className="img-responsive"
                          width={200}
                          height={200}
                      />
                  </div>
                  <div className="item__text">
                      <h3>Постер для дома</h3>
                      <p>Краткий гайд по созданию кастомной постерной темы, и то что нам понадобиться. Как дела будут
                          обстоять с подходами инструментами и утт вопрос текста в принципе тут вопрос так себе давай
                          попробую просто подсчитать сколько мне нужно текста для нормального вывода текста</p>
                      <div className="item__text__info">
                          <time>27.12.2020</time>
                          <a href="">Читать</a>
                      </div>
                  </div>
              </div>
              <div className="posts__list__item small center">
                  <div className="item__img">
                      <Image
                          src='/images/posts/1test_img.jpg'
                          alt='lorem'
                          className="img-responsive"
                          width={300}
                          height={300}
                      />
                  </div>
                  <div className="item__text">
                      <h3>Постер для дома</h3>
                      <p>Краткий гайд по созданию кастомной постерной темы, и то что нам понадобиться. Как дела будут
                          обстоять с подходами инструментами и утт вопрос текста в принципе тут вопрос так себе давай
                          попробую просто подсчитать сколько мне нужно текста для нормального вывода текста</p>
                      <div className="item__text__info">
                          <time>27.12.2020</time>
                          <a href="">Читать</a>
                      </div>
                  </div>
              </div>
              <div className="posts__list__item small right">
                  <div className="item__img ">
                      <Image
                        src='/images/posts/0test_img.jpg'
                        alt='lorem'
                        className="img-responsive"
                        width={300}
                        height={300}
                      />
                  </div>
                  <div className="item__text">
                      <h3>Постер для дома</h3>
                      <p>Краткий гайд по созданию кастомной постерной темы, и то что нам понадобиться. Как дела будут
                          обстоять с подходами инструментами и утт вопрос текста в принципе тут вопрос так себе давай
                          попробую просто подсчитать сколько мне нужно текста для нормального вывода текста</p>
                      <div className="item__text__info">
                          <time>27.12.2020</time>
                          <a href="">Читать</a>
                      </div>
                  </div>
              </div>
          </div>
          <div className="post__primary">
              <div className="post__primary__text">
                  <h3><a href="">Lorem ipsum dolor sit amet</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores consequuntur dicta
                      dolores, dolorum ducimus eligendi enim eveniet incidunt ipsa ipsum laudantium maxime nihil, quasi
                      reprehenderit saepe tenetur ullam vitae.</p>
                  <div className="primary__text__info">
                      <time>27.12.2020</time>
                      <a href="">Читать</a>
                  </div>
              </div>
              <div className="post__primary__img">
                  <div className="img-resp">
                          <Image
                              src='/images/posts/prpost.jpg'
                              alt='lorem'
                              width={300}
                              height={300}
                          />

                  </div>
              </div>
          </div>
      </div>
      </MainLayout>)
}
