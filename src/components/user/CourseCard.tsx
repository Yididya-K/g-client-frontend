import  Button  from "@/src/components/common/button";
import Image from "next/image";

type CourseCardProps = {
  title: string;
  description: string;
  rating: number;
  price: number;
  image: string;
};

export default function CourseCard({ title, description, rating, price, image }: CourseCardProps) {
  return (
    <div className="bg-white  rounded-md p-4 flex flex-col items-center">
      <Image src={image} alt={title} width={300} height={200} className="rounded-md" />
      <h3 className="font-semibold mt-4 text-center">{title}</h3>
      <p className="text-sm text-gray-600 text-center mt-2">{description}</p>
      <div className="flex items-center justify-between w-full mt-4">
        <div className="flex items-center gap-1">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.943a1 1 0 00.95.69h4.146c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.943c.3.921-.755 1.688-1.54 1.118L10 13.011l-3.357 2.44c-.784.57-1.838-.197-1.539-1.118l1.287-3.943a1 1 0 00-.364-1.118L2.67 9.37c-.783-.57-.38-1.81.588-1.81h4.146a1 1 0 00.95-.69l1.286-3.943z" />
              </svg>
            ))}  {rating}
        </div>
        <span className="text-sm font-semibold">Price: ${price}</span>
      </div>
      <div className="w-full border-b-1 border-gray-300 mt-2"></div>
      <Button className="mt-4 w-full items-center justify-center">Preview course</Button>
    </div>
  );
}
