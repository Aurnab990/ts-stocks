import React from 'react';

const Carosel = () => {
    return (
        <div>
            <div class="carousel w-5/6 ml-32 mt-10 lg:mt-24">
                <div id="item1" class="carousel-item w-full">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/008/162/856/small/short-sleeve-t-shirt-technical-fashion-flat-sketch-illustration-navy-blue-color-template-free-vector.jpg" class="w-full" />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img src="https://thumbs.dreamstime.com/b/blank-t-shirt-color-blue-template-front-back-view-isolated-white-background-plain-t-shirts-taken-top-view-blank-203907927.jpg" class="w-full" />
                </div>
                <div id="item3" class="carousel-item w-full">
                    <img src="https://outrobes.com/wp-content/uploads/2022/08/360_F_474362554_o4Eqptw92LVwaidHyNQN7m1IuoMNCZ8I.jpg" class="w-full" />
                </div>
                <div id="item4" class="carousel-item w-full">
                    <img src="https://thumbs.dreamstime.com/t/blank-t-shirt-color-navy-template-front-back-view-white-background-blank-t-shirt-color-navy-template-front-back-view-114050320.jpg" class="w-full" />
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
                <a href="#item4" class="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Carosel;