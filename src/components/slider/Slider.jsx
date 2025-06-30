import React,  {useState} from 'react'
import SlideImg1 from "../../assets/images/slider_img_1.jpeg"
import SlideImg2 from '../../assets/images/slider_img_2.jpeg'
import SlideImg3 from '../../assets/images/slider_img_3.jpeg'
import Arrow from '../../assets/images/arrow.svg'



const Slider = () => {
    const [activeSlide, setActiveSlide] = useState(0)
    const [slidesArr, setSlidesArr] = useState([SlideImg1, SlideImg2, SlideImg3])

    const leftArrowPressHandler = () => {
        const arr = [...slidesArr]
        arr.unshift(arr.pop())
        setSlidesArr(arr)
    
    }
    const rightArrowPressHandler = () => {
        const arr = [...slidesArr]
        arr.push(arr.shift())
        setSlidesArr(arr)
    }
    return (
        <div className='slider_container'>
            <div className="slides_list">

                {slidesArr.map((slide, index) => (
                <div className={index === 1 ? 'slide active' : 'slide'} key={Math.random()}>
                    <img src={slide} alt="" />
                </div>
                ))}

            </div>
            <div className="slides_arrows">
                <input type="image" src={Arrow} alt="" className="arrow-left" onClick= {leftArrowPressHandler}/>
                <input type="image" src={Arrow} alt="" className="arrow-right" onClick={rightArrowPressHandler}/>
            </div>
            <div className="slides_dots"></div>
         
        </div>
    )
}

export default Slider
