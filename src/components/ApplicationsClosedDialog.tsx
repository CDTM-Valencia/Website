import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface ApplicationsClosedDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const ApplicationsClosedDialog = ({
  isOpen,
  onOpenChange,
}: ApplicationsClosedDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Applications are closed</DialogTitle>
          <DialogDescription className="space-y-4">
            <p>
              The application period for CDTM Valencia Hacks 2025 has ended.
              Thank you for your interest!
            </p>
            <p>
              Want to stay updated about CDTM hackathons, applications, events
              and more?{' '}
              <a
                href="https://app.formbricks.com/s/cmfbaepft3g8dux012u7gkh7f"
                target="_blank"
                rel="noopener noreferrer"
                className="text-springBlue underline font-medium"
              >
                Enter your email address here
              </a>
              .
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationsClosedDialog;
