import skelenton from "../../styles/skelenton.module.scss"
import home from "../../styles/microhome.pages.module.scss";
import pages from "../../styles/home.pages.module.scss"


export function SkelentonCarousel() {
    return  (
        <>
        <div className={pages.carousel_container}>
            <div className={`${pages.carousel}  ${skelenton.carousel}`}>
                {/* write up */}
                <div className={pages.carousel_trail}>
                    <div className={pages.carousel_item}>
                        <div className={`${pages.carousel_name} ${skelenton.carousel_title}`}></div>
                        <div className={pages.carousel_title}>
                        {/* { ellipse(description)} */}
                        </div>
                        
                        <button className={`${pages.carousel_button} ${skelenton.carousel_button}`}></button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export function SkelentonTrending() {
    return (
        <>
        <div className={`${home.trending_list} ${skelenton.trending_list}`}>
            <div className={`${home.trending} ${skelenton.trending_skelenton}`}>
            {/* trending image,  */}
            <div className={`${home.trending_data} ${skelenton.trending_data}`}>
            </div>
            
            <div className={`${home.trending_music_info} ${skelenton.trending_music_info}`}>
                {/* duration */}
                {/* <div className={home.trending_music_play_count}>8 078 651</div> */}
            </div>
            
            {/* trending info icon */}
            <div className={`${home.trending_info_icon} ${skelenton.trending_info_icon}`}>
                <span></span>
                <span></span>
            </div>
            </div>
        </div>
    </>
    )


}