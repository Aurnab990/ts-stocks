import React from 'react';

const Review = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-28 px-5'>
            <div class="card card-compact w-80  shadow-xl">
                <figure><img  src="https://cdn.dribbble.com/users/627238/screenshots/3919614/media/520c93dfddb63e60e083e2f68d7358e5.png?compress=1&resize=400x300" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title"><div class="rating">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked/>
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked/>
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked/>
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    </div></h2>
                    <p>The best online shopping experience for me. Price are so reasonable. Service is not bad. Courier method is well. They need to improve the system to check quality of their vendor's products.</p>

                </div>
            </div>

            <div class="card card-compact w-80  shadow-xl">
                <figure><img  src="https://cdn.dribbble.com/users/627238/screenshots/3839913/medipass_customer_service_avatar_ii.png?compress=1&resize=400x300" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title"><div class="rating">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked/>
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked/>
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked/>
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    </div></h2>
                    <p>The best online shopping experience for me. Price are so reasonable. Service is not bad. Courier method is well. They need to improve the system to check quality of their vendor's products.</p>

                </div>
            </div>

            <div class="card card-compact w-80  shadow-xl">
                <figure><img  src="https://cdn.dribbble.com/users/627238/screenshots/3919614/media/520c93dfddb63e60e083e2f68d7358e5.png?compress=1&resize=400x300" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title"><div class="rating">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked/>
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked/>
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked/>
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    </div></h2>
                    <p>The best online shopping experience for me. Price are so reasonable. Service is not bad. Courier method is well. They need to improve the system to check quality of their vendor's products.</p>

                </div>
            </div>
        </div>
    );
};

export default Review;