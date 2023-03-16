import React, { useState } from 'react'
import { data } from '../data'

function Element() {
  const [index, incIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [state, setstate] = useState(false);
  const [worngAnswers, setWorngAnswers] = useState([]);
  const [Show, setShow] = useState(false);

  let tempArray = data;

  function ans(a) {
    if (a) {
      setScore(preScore => preScore + 1);
    }
    console.log(a);
  }

  function handlerestart(data) {
    setstate(false)
    incIndex(0)
    setScore(0)
    tempArray = shuffleArray(data)
    console.log(worngAnswers);
  }

  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function next() {
    if (index === tempArray.length - 1) {
      setstate(true)
      console.log(index, tempArray.length - 1);
    } else {
      incIndex(preIndex => preIndex + 1);
    }
  }

  const optionsBtn = tempArray[index].choice.map((e, i) => {
    // console.log(e.anstxt);
    return (
      <button id={`${index}${i}`} onClick={() => {
        ans(e.istrue);
        setColor(i, index, e.istrue, tempArray);
      }} >{e.anstxt}</button>
    )
  })

  function setColor(i, ind, answer) {
    console.log(ind, i);
    console.log(i, document.getElementById(`${ind}${i}`));
    const btn_Clicked = document.getElementById(`${ind}${i}`);
    if (answer) {
      btn_Clicked.style.backgroundColor = "#059862";
      btn_Clicked.style.color = "white";
      setTimeout(() => {
        btn_Clicked.style.backgroundColor = "";
        btn_Clicked.style.color = "black";
        next()
      }, 600);
    } else {
      // worngAnswers.push(tempArray[ind]);
      setWorngAnswers(oldArray => [...oldArray, tempArray[ind]])
      console.log(tempArray[ind]);
      btn_Clicked.style.backgroundColor = "red";
      btn_Clicked.style.color = "white";
      tempArray[ind].choice.map((e, i) => {
        if (e.istrue) {
          let correctBtn = document.getElementById(`${ind}${i}`)
          console.log(correctBtn.innerText);
          correctBtn.style.backgroundColor = "#059862";
          correctBtn.style.color = "white";
          setTimeout(() => {
            correctBtn.style.backgroundColor = "";
            correctBtn.style.color = "black";
            btn_Clicked.style.backgroundColor = "";
            btn_Clicked.style.color = "black";
            next()
          }, 600);
        }
        return null
      })
    }
  }

  const scoreNotDataLength = () => {
    if (score !== data.length) {
      setShow(true);
    }
  }

  return (
    <div className="card">
      {state ? (
        <div className="go">
          <h2>Your Score {score} out of {tempArray.length}</h2>
          <div className="btnsgo">
            <button className='rst' onClick={() => {
              handlerestart(data)
            }}>RESTART</button>
            <button className='show' onClick={() => {
              scoreNotDataLength()
              setShow(true)
            }}>Show Q&A</button>
          </div>
          {
            (Show) ? (
              <div className="answertab" id='tab'>
                <div className="tabTOp">
                  <button className='closeBtn' onClick={() => {
                    setShow(false)
                  }}>Close</button>
                </div>
                {worngAnswers.map((e) => {
                  console.log(e);
                  return (<>
                    <h2>{e.Questions}</h2>
                    {e.choice.map((ei) => {
                      if (ei.istrue) {
                        return (
                          <h3>{ei.anstxt}</h3>
                        )
                      }
                      return null
                    })}
                    <br />
                    <hr />
                    <br />
                  </>)
                })}
              </div>
            ) : (
              <></>
            )
          }
        </div>
      ) : (
        <>
          <div className="top">
            <h3>Questions {index + 1} of {tempArray.length}</h3>
            <h3>Current Score : {score}</h3>
          </div>
          <div className="question">
            <h1>{tempArray[index].Questions}</h1>
            <div className="options">
              {optionsBtn}
            </div>
          </div>
        </>
      )}

    </div>
  )
}

export default Element