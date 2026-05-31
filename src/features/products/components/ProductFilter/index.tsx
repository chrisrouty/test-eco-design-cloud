import {Button} from "../../../../components/ui/Button";
import {FilterIcon} from "lucide-react";
import clsx from "clsx";

export const ProductFilter = () => {

	const classes = clsx(
		'hidden',
		'md:inline-block',
	);

	return (
		<div>
			<Button variant="glass">
				<FilterIcon />
				<span className={classes}>Filter</span>
			</Button>
		</div>
	)
}