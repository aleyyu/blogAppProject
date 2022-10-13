import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUsCard.css'


function AboutUsCard() {
    return (
        /*
        <div>
            <div class="card mb-3">
                <img class="card-img-top" src="../utils/img/office.jpg" alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Voluptate, rem. Deserunt incidunt illum atque omnis voluptatem optio rerum veritatis et natus! 
                        Laborum nisi delectus vel eveniet maxime libero commodi earum dolorum. 
                        Veritatis fugiat dolorum incidunt recusandae voluptatum libero amet, tenetur, non provident 
                        consequatur unde sunt doloremque qui magni aliquam nostrum!</p>
                    </div>
            </div>
        </div>
        */
        <div className='aboutUsCard'>
            <div className='CardTop'>
                <img src="..." alt="görsel burada olacak" />
            </div>

            <div className='CardBody'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Esse maxime et hic ut harum ipsum debitis, repellat dolorum,
                    a quo saepe aut fugit nulla nostrum sequi dolorem veritatis cupiditate
                    illo! Odio praesentium aliquid eius corrupti, explicabo, officia
                    rerum inventore omnis aperiam dolor doloribus debitis quam fugit
                    aspernatur illo. Totam, alias.
                </p>
            </div>
        </div>
    )
}

export default AboutUsCard;
