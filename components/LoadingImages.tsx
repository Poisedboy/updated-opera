import { Skeleton } from "@nextui-org/react";

const LoadingImages = () => {
	return (
		<>
			<Skeleton className="rounded-lg ">
				<div className="h-[200px] w-[200px] rounded-lg bg-default-300"></div>
			</Skeleton>
		</>
	);
};

export default LoadingImages;
