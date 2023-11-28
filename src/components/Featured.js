import './Featured.css';

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://media.istockphoto.com/id/1363707600/photo/zakim-bridge-in-boston-massachusetts.webp?b=1&s=170667a&w=0&k=20&c=r_r9mUrPriBTgZI5TaFcU5upj-C0aVbM6VL_diVfiek=" alt="" />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>123 property</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://media.istockphoto.com/id/1287303049/photo/cape-verde-landscape-photo-collage-montage-santiago-sal-boavista-sao-vicente.webp?b=1&s=170667a&w=0&k=20&c=XS5DQ4zuDYOXqxSc4C-E-gXdPFtE2wTz0nFtsW1eIh4=" alt="" />
            <div className="featuredTitles">
                <h1>Austin</h1>
                <h2>532 property</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://media.istockphoto.com/id/1412670722/photo/tourist-taking-photo-of-tram-in-lisbon.webp?b=1&s=170667a&w=0&k=20&c=2nxKbW7aRw2tGBDBW5OrQtdCdr1EbMRl6oHj0F575Q4=" alt="" />
            <div className="featuredTitles">
                <h1>Reno</h1>
                <h2>533 property</h2>
            </div>
        </div>
      
    </div>
  )
}

export default Featured
