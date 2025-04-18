import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilters, setShowFilters] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [Category,setCategory] = useState([])
  const [SubCategory,setSubCategory] = useState([])
  const [sortType, setSortType] = useState("relevant");


  const toggleCategory = (e) => {

    if (Category.includes(e.target.value)) {
      setCategory(prev=> prev.filter((item) => item !== e.target.value));
    }
    else{
      setCategory(prev=> [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (SubCategory.includes(e.target.value)) {
      setSubCategory(prev=> prev.filter((item) => item !== e.target.value));
    }
    else{
      setSubCategory(prev=> [...prev,e.target.value])
    }
  }


  const applyFilter = () => {

    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (Category.length > 0) {
      productsCopy = productsCopy.filter(item => Category.includes(item.category));
    }

    if (SubCategory.length > 0) {
      productsCopy = productsCopy.filter(item => SubCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  }


  const sortProducts = (e) => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;  

      default:
        applyFilter()
        break;  
    }
  }


  useEffect(() => {
      applyFilter()
  }, [Category,SubCategory,search,showSearch]);

  useEffect(() => {
    sortProducts()
  },[sortType])


  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilters(!showFilters)}
          className="my-2 text-xl flex item-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilters ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilters ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Men"} onChange={toggleCategory}/> Men
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Women"} onChange={toggleCategory}/> Women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Kids"} onChange={toggleCategory}/> Kids
            </p>
          </div>
        </div>

        {/* SubCategory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mY-5 ${
            showFilters ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Topwear"} onChange={toggleSubCategory}/>
              TopWear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Bottomwear"} onChange={toggleSubCategory}/>
              Bottom Wear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Winterwear"} onChange={toggleSubCategory}/>
              WinterWear
            </p>
          </div>
        </div>
      </div>

      {/* Right side Product section */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />

          {/* product sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
            <option value="relevant">sort by:Relevant</option>
            <option value="low-hight">sort by: low to high</option>
            <option value="high-low">sort by: High to low</option>
          </select>
        </div>

        {/* map products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
