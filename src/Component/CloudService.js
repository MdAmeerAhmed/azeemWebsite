import React from 'react'
import DigitalMarket from './DigitalMarket';
function CloudService() {
    const cards = [
        { title: "Amazon Web Services Cloud Solutions in Dubai",para:"Disaster Recovery as a Service (DRaaS) can help maintain company continuity. Our solutions minimize downtime while adhering to industry requirements, guarantee rapid recovery during outages, and protect vital data and apps by duplicating them to the cloud." ,img: "./img/cloud/img1.png" },
        { title: "Azure Cloud Services in Dubai",para:"Disaster Recovery as a Service (DRaaS) can help maintain company continuity. Our solutions minimize downtime while adhering to industry requirements, guarantee rapid recovery during outages, and protect vital data and apps by duplicating them to the cloud.", img: "./img/cloud/img2.png" },
        { title: "Disaster Recovery (DRaaS) Cloud Solutions Dubai",para:"Disaster Recovery as a Service (DRaaS) can help maintain company continuity. Our solutions minimize downtime while adhering to industry requirements, guarantee rapid recovery during outages, and protect vital data and apps by duplicating them to the cloud." ,img: "./img/cloud/img3.png" },
        { title: "Migration Services", para:"Disaster Recovery as a Service (DRaaS) can help maintain company continuity. Our solutions minimize downtime while adhering to industry requirements, guarantee rapid recovery during outages, and protect vital data and apps by duplicating them to the cloud.",img: "./img/cloud/img4.png" },
        { title: "Backup Data Solutions", para:"Disaster Recovery as a Service (DRaaS) can help maintain company continuity. Our solutions minimize downtime while adhering to industry requirements, guarantee rapid recovery during outages, and protect vital data and apps by duplicating them to the cloud.",img: "./img/cloud/img5.png" },
        { title: " Cloud Services in UAE", para:"Disaster Recovery as a Service (DRaaS) can help maintain company continuity. Our solutions minimize downtime while adhering to industry requirements, guarantee rapid recovery during outages, and protect vital data and apps by duplicating them to the cloud.",img: "./img/cloud/img6.png" },
        { title: "IBM Watson Workspace Cloud Services", para:"Disaster Recovery as a Service (DRaaS) can help maintain company continuity. Our solutions minimize downtime while adhering to industry requirements, guarantee rapid recovery during outages, and protect vital data and apps by duplicating them to the cloud.",img: "./img/cloud/img7.png" },
        { title: "Huawei Cloud Services", para:"Huawei Cloud Services provides cutting-edge solutions with big data, AI, and high-performance computing capabilities. Thanks to its cloud-native architecture and industry-leading security, Huawei's cloud services enable digital transformation and scalable expansion for companies throughout Dubai.",img: "./img/cloud/img8.png" },
      ];
  return (
    <>
     <div className='bg-white text-center mx-5 mt-3'>
        <div className='p-4'>
            <h1>Cloud Solutions in UAE</h1>
            <p>Rounak Computers offers organizations in Dubai and the UAE dependable and secure cloud solutions. Our services are intended to assist you in optimizing your IT infrastructure, guaranteeing scalability and flawless performance. We provide services specifically designed to meet your company's demands, whether you're searching for cloud solutions in Dubai or professional assistance from a reliable supplier. Our team of experts collaborates with you to put into practice successful cloud computing techniques, assisting you in becoming more inventive and efficient. Allow us to provide you with the best options and outstanding support as you embark on your cloud transition journey with one of the best <a href="" className='m-0 p-0 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>IT maintenance companies in Dubai.</a></p>
            
        </div>
        <div className='pt-3 pb-5 px-4 '>
        <div className='text-center'>
            <h2>Our Advanced Cloud Computing Services in Dubai</h2>
            <p  style={{textAlign: "justify"}} >Leverage our cloud services, designed for disaster recovery, data transfer, and backup, to harness the power of AWS, Azure, and other leading platforms. As a trusted cloud solution provider, we deliver tailored solutions to meet your business's critical needs with reliability and efficiency.</p>
        </div>
        <div className="container mt-5 " style={{ maxHeight: "1000px", overflowY: "auto"}} >
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 ">
        {cards.map((card, index) => (
          <div className="col" key={index}>
            <div className="card " style={{ width: "18rem",backgroundColor:"#0f055f" }}>
              <img
                src={card.img}
                className="card-img-top p-3 " 
                alt={card.title}
                style={{ cursor: "pointer",borderRadius: "0" }} 
              />
              <div className="card-body">
                <h6 className="card-title text-center text-white fw-medium mb-2" style={{ cursor: "pointer",margin: "0", padding: "2px", fontSize: "14px" }}>
                  {card.title}
                </h6>
                <p class="card-text text-center text-white">{card.para}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
     </div>
     <DigitalMarket />
     </>
  )
}

export default CloudService
