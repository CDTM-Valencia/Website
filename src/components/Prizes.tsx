import {
	GENERAL_PRIZES,
	CASH_PRIZES,
	CASE_WINNERS_SWEATERS,
	CASE_WINNERS_BOTTLES,
	IBM_SPECIFIC_CASE,
} from "@/constants/prizes";
import { PrizeDisplay } from "@/components/PrizeDisplay";
import { CashPrizesRow } from "@/components/CashPrizesRow";
import { Gift, Trophy } from "lucide-react";

interface PrizesProps {
	className?: string;
}

export function Prizes({ className = "" }: PrizesProps) {
	return (
		<section
			id="prizes"
			className={`py-16 px-4 bg-white ${className}`}>
			<div className="w-full">
				<h2 className="text-center text-springBlue mb-12">Prizes & Rewards</h2>

				{/* General Prizes */}
				<PrizeDisplay
					prizes={GENERAL_PRIZES.prizes}
					title={GENERAL_PRIZES.title}
					description={GENERAL_PRIZES.description}
					icon={<Gift className="h-8 w-8 text-springBlue" />}
				/>

				{/* Winner Prizes - Combined */}
				<PrizeDisplay
					prizes={[
						CASE_WINNERS_SWEATERS.prizes[0],
						CASE_WINNERS_BOTTLES.prizes[0],
						IBM_SPECIFIC_CASE.prizes[0],
					]}
					title="Winner Prizes"
					description="Special prizes for winning teams"
					icon={<Trophy className="h-8 w-8 text-yellow-500" />}
				/>

				{/* Cash Prizes Row */}
				<CashPrizesRow prizes={CASH_PRIZES.prizes} />
			</div>
		</section>
	);
}
