import ManCategory from '../assets/Images/Men top.jpeg'
import WomenCategory from '../assets/Images/women dress.jpeg'
import KidsCategory from '../assets/Images/kids wear.jpeg'

const categories = [
    {
        title: 'Men',
        imageUrl: ManCategory,
    },
    {
        title: 'Women',
        imageUrl: WomenCategory,
    },
    {
        title: 'Kids',
        imageUrl: KidsCategory,
    },
]

const CategorySection = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer'>
      {categories.map((category, index) => {
        return <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
            <img src={category.imageUrl} alt='' className='w-full h-full object-cover rounded-lg shadow-md'/>
            <div className='absolute top-28 left-12'>
                <p className='text-xl font-bold'>{category.title}</p>
                <p className=' text-gray-600'>View All</p>
            </div>
        </div>
      })}
    </div>
  )
}

export default CategorySection
