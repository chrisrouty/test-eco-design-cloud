import {Select} from "../../../../components/ui/Input/Select/intex";
import {Button} from "../../../../components/ui/Button";
import {Label} from "../../../../components/ui/Label";
import {ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight} from "lucide-react";
import clsx from "clsx";
import {useState} from "react";

const pageSizeOptions = [
	{label: '10', value: '10'},
	{label: '20', value: '20'},
	{label: '30', value: '30'},
]

export const ProductPaginate = () => {
	const [pageSize, setPageSize] = useState('10')

	const classes = clsx(
		'hidden whitespace-nowrap',
		'lg:inline-block',
	);

	return (
		<div className="flex items-center justify-between bg-black/24 p-3 rounded-b-lg">

			<div className="flex items-center gap-2">
				<Label className={classes}>Row per page :</Label>
				<Select
					onChange={setPageSize}
					options={pageSizeOptions}
					value={pageSize}
					id="rowsPerPage"
					name="rowsPerPage"
				/>
			</div>

			<div className="flex items-center gap-3">
				<Button variant="glass" size="sm">
					<ChevronsLeft /> <span className={classes}>First page</span>
				</Button>
				<Button variant="glass" size="sm">
					<ChevronLeft /> <span className={classes}>Previous page</span>
				</Button>

				<div className="flex items-center gap-3">
					<Button variant="glass" size="sm" className="bg-primary-hover">1</Button>
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
