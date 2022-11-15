import React from 'react'
import NewsItem from './Newsitem'
import '../App.css'
import { useEffect, useState } from 'react';

const News = (props) => {
  // dummy object
  // const article = [
  //     {
  //       "source": {
  //         "id": "espn-cric-info",
  //         "name": "ESPN Cric Info"
  //       },
  //       "author": null,
  //       "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //       "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //       "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //       "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //       "publishedAt": "2020-04-27T11:41:47Z",
  //       "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": "espn-cric-info",
  //         "name": "ESPN Cric Info"
  //       },
  //       "author": null,
  //       "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //       "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //       "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //       "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //       "publishedAt": "2020-03-30T15:26:05Z",
  //       "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": "espn-cric-info",
  //         "name": "ESPN Cric Info"
  //       },
  //       "author": null,
  //       "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //       "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //       "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //       "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //       "publishedAt": "2020-04-27T11:41:47Z",
  //       "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": "espn-cric-info",
  //         "name": "ESPN Cric Info"
  //       },
  //       "author": null,
  //       "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //       "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //       "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //       "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //       "publishedAt": "2020-03-30T15:26:05Z",
  //       "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": "espn-cric-info",
  //         "name": "ESPN Cric Info"
  //       },
  //       "author": null,
  //       "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //       "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //       "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //       "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //       "publishedAt": "2020-04-27T11:41:47Z",
  //       "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": "espn-cric-info",
  //         "name": "ESPN Cric Info"
  //       },
  //       "author": null,
  //       "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //       "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //       "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //       "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //       "publishedAt": "2020-03-30T15:26:05Z",
  //       "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //     }
  //   ]

  const {p, category} = props;
  const [article, setArticle] = useState([]);

  const [result,setResult] = useState(12);
  const [values,setValues] = useState(
      {
        pageNumber:1,
        loading:false,
        // result,    ...Bug 
        upto:Math.ceil(result/p)
      }
    );

  const updateNews = async () => {
    console.log("news updated");
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&business&apiKey=${"your-api-key-here"}&page=${values.pageNumber}&pageSize=${p}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticle(parsedData.articles);
    setResult(parsedData.totalResults);
    // setResult(35);
      //  setValues({result:parsedData.totalResults})
  }
  useEffect(() => {
    updateNews();
  })

  const previousClick = ()=>{
    setValues({pageNumber:values.pageNumber-1,loading:false,upto:Math.ceil(result/p)});
    console.log("page number: "+values.pageNumber);
    console.log("upto: "+values.upto);
  }

  const nextClick = ()=>{
    setValues({pageNumber:values.pageNumber+1,loading:false,upto:Math.ceil(result/p)});
    console.log(values.pageNumber);
    console.log(values.upto);
  }

  return (
    <>
    <div className='news-container'>
      <h1 style={{marginTop: '-13px',color:'white',fontSize:'27px'}}>{(category.slice(0,1)).toUpperCase()+category.slice(1)}</h1>
      <div className='news' style={{backgroundImage: `url(${process.env.PUBLIC_URL+ props.img})`}} >
        {
          article.map((elem) => {
            return <NewsItem key={elem.url} {...elem} />
          })
        }
      </div>
      {values.pageNumber > 1 && <button className="btn prev" type="button" onClick={previousClick} style={{ float: 'left',marginLeft: '26rem',fontWeight:'bold' }}>previous</button>}
      {/* {<button className="btn prev" type="button" style={{ float: 'left' }}>previous</button>} */}
      {values.pageNumber}
      {values.pageNumber < values.upto && <button className="btn nxt" type="button" onClick={nextClick} style={{ float: 'right',marginRight: '26rem',fontWeight:'bold' }}>next</button>}
      {/* {<button className="btn nxt" type="button"  style={{ float: 'right' }}>next</button>} */}
    </div>
    </>
  )
}


// const Wrapper = styled.div`
// .news{
//   background: ${(props)=>props.};
// }
// `

export default News;
