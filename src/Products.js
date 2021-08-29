const Products = [
    {
        id: 1,
        name: 'Website',
        price: 999.99,
        type: 'once off',
        items: [{
                id: 1,
                name: 'Free Hosting For 1 year'   
            },
            {
                id: 2,
                name: '50 emails',
            },
            {
                id: 3,
                name: 'Custom Domain'
            }
        ]
    },
    {
        id: 2,
        name: 'E-Commerce',
        price: 299.99,
        type: 'per month',
        items: [{
            id: 1,
            name: 'Free Hosting'   
        },
        {
            id: 2,
            name: '50 emails',
        },
        {
            id: 3,
            name: 'Umlimited Upload & Update'
        },
        {
            id: 4,
            name: 'Basic SEO Setup'
        }
    ]
    },
    {
        id: 3,
        name: 'Marketing & SEO',
        price: 249.99,
        type: 'per month',
        items: [{
            id: 1,
            name: 'Social Account Setup'   
        },
        {
            id: 2,
            name: 'Social Media Ads',
        },
        {
            id: 3,
            name: '24/7 Support'
        }
    ]
    }
]

export default Products