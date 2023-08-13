import React from 'react'
export default function More1() {
  return (
    <>
    <div className='more1text'><h1 align='center'>RENT A HARVESTER</h1></div>
    <div className='bbbody'>
        <article className='blog-post'>
            <div className='blog-post_img'>
                <img src='/assets/harv1.jpg' alt='' />
            </div>
            <div className='blog-post_info'>
                <div className='blog-post_date'> 
                    <span>AUCTION</span>
                    
                    <span>Rent: INR 75/- Per Hour</span>
                </div>
                <h2 className='blog-post_title'>Paddy Harvester</h2>
                <input placeholder='Select Location'  /> <br/>
                <a href='/select' className='blog-post_cta'>Select</a>
            </div>
        </article>
        </div>
        </>
  )
}
