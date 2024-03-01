import ChefCard from "./ChefCard"

const Chefc = () => {

    const chiefs = [

        {
            name: "Sanjeev Kapoor",
            img: "https://www.bing.com/images/search?view=detailV2&ccid=Jz3JntgT&id=183BA486DBE07838E6D6A1FE76F053AD82312BB3&thid=OIP.Jz3JntgTCzPwxjXgWCTWeQHaKV&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.273dc99ed8130b33f0c635e05824d679%3frik%3dsysxgq1T8Hb%252boQ%26riu%3dhttp%253a%252f%252fimages.mid-day.com%252fimages%252f2015%252fapr%252f19Sanjeev-Kapoor.jpg%26ehk%3dBIfe8k%252btS%252b03iuocLCO1O7f%252flbT3VQWRAEYfOaBy5uk%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=935&expw=670&q=sanjeev+kappor+image&simid=608052062798938482&FORM=IRPRST&ck=1EC257EA2CC948A8859EDB99134E37D7&selectedIndex=2&itb=0",
            norecipe: "150",
            cusine: "Indian"
        },
        {
            name: "Alain Ducasse ",
            img: "https://img-3.journaldesfemmes.fr/Uv-ILAQONqaQRYw3s2J9zuvzGas=/1080x/smart/456dfee05d33492d8942b002e1af1539/ccmcms-jdf/10948755.jpg",
            norecipe: "250",
            cusine: "French"
        },
        {
            name: " Martin Berasategui",
            img: "https://th.bing.com/th/id/R.f6f24cc1f077ef2cce9175820c838997?rik=hXKSCywJvpICiA&riu=http%3a%2f%2fthegourmetjournal.com%2fwp-content%2fuploads%2f2011%2f12%2fMartin-Berasategui1.jpg&ehk=Wqg0wlMFJfsqNCY7lLQ9ZGPsJZaD0hO1qoTe321%2bbSU%3d&risl=&pid=ImgRaw&r=0",
            norecipe: "270",
            cusine: "Spanish"
        },
        {
            name: "Gordon Ramsay",
            img: "https://amp.thisisinsider.com/images/5cb4846d6afbee5ac25bc2a8-750-562.jpg",
            norecipe: "147",
            cusine: "British"
        },
        {
            name: "Seiji Yamamoto",
            img: "https://www.babelio.com/users/AVT_Yoshihiro-Murata_8982.jpg",
            norecipe: "178",
            cusine: "Japanese"
        },
        {
            name: "Andreas Caminada",
            img: "https://static.wixstatic.com/media/4f17a4_5611b6d9776a4b418e7b9b7ec4a73e8c~mv2.jpg/v1/fill/w_1430,h_1152,al_c/4f17a4_5611b6d9776a4b418e7b9b7ec4a73e8c~mv2.jpg",
            norecipe: "200",
            cusine: "Swiss"
        },
        
        {
            name: "Vikas Khanna",
            img: "https://i2.cinestaan.com/image-bank/1500-1500/180001-181000/180373.jpg",
            norecipe: "140",
            cusine: "Indian"
        },
        {
            name: "Curtis Stone",
            img: "https://i.dailymail.co.uk/i/pix/2017/01/28/08/3C8B74DE00000578-0-image-m-46_1485591430074.jpg",
            norecipe: "120",
            cusine: "Australia"
        },
        {
            name: "Rick Bayless",
            img: "https://i2.wp.com/pagesix.com/wp-content/uploads/sites/3/2016/10/rick-bayless.jpg?quality=90&strip=all&ssl=1",
            norecipe: "125",
            cusine: "American"
        }
    ]
  return (
    <div className="Chefce">
        <h1 className="Cheftitle">Our Top Chefs</h1>
        <div className="top-chef-container">
            {/* <ChefCard />
            <ChefCard />
            <ChefCard />
            <ChefCard />
            <ChefCard />
            <ChefCard />
            <ChefCard />
            <ChefCard /> */}
            {chiefs.map(chief => <ChefCard key={chief.name} chief={chief} />) }


        </div>
    </div>
  )
}

export default Chefc
