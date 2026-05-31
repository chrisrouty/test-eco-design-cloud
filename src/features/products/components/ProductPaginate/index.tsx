import {Select} from "../../../../components/ui/Input/Select/intex";
import {Button} from "../../../../components/ui/Button";
import {Label} from "../../../../components/ui/Label";
import {ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight} from "lucide-react";
import clsx from "clsx";

export const ProductPaginate = () => {

	const classes = clsx(
		'hidden',
		'md:inline-block',
	);

	return (
		<div className="flex items-center justify-between bg-black/24 p-3 rounded-b-lg">
			<div className="flex items-center gap-2">
				<Label className={classes}>Row par page :</Label>
				<Select />
			</div>
			<div className="flex items-center gap-3">
				<Button variant="glass" size="sm">
					<ChevronsLeft /> <span className={classes}>First page</span>
				</Button>
				<Button variant="glass" size="sm">
					<ChevronLeft /> <span className={classes}>Previous page</span>
				</Button>
				<div className="flex items-center gap-3">
					<Button variant="glass" size="sm">1</Button>
					<Button variant="glass" size="sm">2</Button>
					<Button variant="glass" size="sm">3</Button>
				</div>
				<Button variant="glass" size="sm">
					<span className={classes}>Next page</span> <ChevronRight />
				</Button>
				<Button variant="glass" size="sm">
					<span className={classes}>Last page</span> <ChevronsRight />
				</Button>
			</div>
		</div>
	)
}