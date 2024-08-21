import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";

const HomePage = () => {
  return (
    <div className="">
      <Slider />
      <div className="flex flex-col px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-12">
        <h2 className="text-xl font-semibold mb-8">Featured Products</h2>
        <div className="relative w-full">
          <ProductList />
        </div>
      </div>
      <div className="flex flex-col py-12">
        <h2 className="text-xl font-semibold px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-8">
          Categories
        </h2>
        <div className="relative w-full">
          <CategoryList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
