import { Prize } from '@/constants/prizes';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

interface PrizeModalProps {
  prize: Prize | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PrizeModal({ prize, isOpen, onClose }: PrizeModalProps) {
  if (!prize) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[95vh] overflow-y-auto bg-transparent border-none shadow-none p-0 [&>button]:hidden">
        <div className="bg-gradient-to-br from-springPaleBlue to-white rounded-lg shadow-2xl">
          <DialogHeader className="p-6 pb-0">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-3xl font-bold text-springBlue">
                {prize.name}
              </DialogTitle>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </DialogHeader>

          <div className="space-y-8 p-6">
            {/* Large Image */}
            {prize.image && (
              <div className="flex justify-center">
                <div className="w-full max-w-2xl h-96 flex items-center justify-center">
                  <img
                    src={prize.image}
                    alt={prize.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            )}

            {/* Prize Details */}
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed text-center">
                {prize.description}
              </p>

              {/* Value Badge */}
              {prize.value && (
                <div className="flex justify-center">
                  <Badge
                    variant="secondary"
                    className="bg-springBlue/10 text-springBlue text-xl font-semibold px-6 py-3"
                  >
                    {prize.value}
                  </Badge>
                </div>
              )}

              {/* Sponsor Info */}
              {prize.sponsor && (
                <div className="flex items-center justify-center gap-3 text-gray-600">
                  <span className="text-lg">Sponsored by</span>
                  {prize.sponsorLogos ? (
                    <div className="flex items-center gap-4">
                      {prize.sponsorLogos.map((sponsor, index) => (
                        <a
                          key={index}
                          href={sponsor.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-80 transition-opacity"
                          title={sponsor.name}
                        >
                          <img
                            src={sponsor.logo}
                            alt={`${sponsor.name} logo`}
                            className="h-10 w-auto"
                          />
                        </a>
                      ))}
                    </div>
                  ) : prize.sponsorLogo ? (
                    <a
                      href={prize.sponsorLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <img
                        src={prize.sponsorLogo}
                        alt={`${prize.sponsor} logo`}
                        className="h-10 w-auto"
                      />
                    </a>
                  ) : (
                    <span className="font-medium text-lg">{prize.sponsor}</span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
