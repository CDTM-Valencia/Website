import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  applicationsNotYetOpen,
  applicationsAreClosed,
  isInPostCloseAnnouncementWindow,
} from '@/lib/utils';

interface ApplicationsClosedDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const ApplicationsClosedDialog = ({
  isOpen,
  onOpenChange,
}: ApplicationsClosedDialogProps) => {
  const isNotYetOpen = applicationsNotYetOpen();
  const isClosed = applicationsAreClosed();
  const isInAnnouncementPhase = isInPostCloseAnnouncementWindow();

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isNotYetOpen
              ? 'Applications not yet open'
              : isInAnnouncementPhase
              ? 'Thanks for applying — watch your inbox'
              : 'Applications are closed'}
          </DialogTitle>
          <DialogDescription className="space-y-4">
            {isNotYetOpen ? (
              <>
                <p>
                  Applications for CDTM Valencia Hacks 2025 will be open from
                  22-29 September. Please check back then!
                </p>
                <p>
                  Want to stay updated about CDTM hackathons, applications,
                  events and more?{' '}
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
              </>
            ) : isInAnnouncementPhase ? (
              <>
                <p>
                  Applications are now closed. Please check your email inboxes
                  or reach out to
                  <a
                    href="mailto:vlc.hacks@cdtm.de"
                    className="text-springBlue underline font-medium"
                  >
                    {' '}
                    vlc.hacks@cdtm.de
                  </a>
                  .
                </p>
                <p>
                  We will contact you with all information. Feel free to send
                  any doubts to the website (Europe/Madrid).
                </p>
              </>
            ) : (
              <>
                <p>
                  The application period for CDTM Valencia Hacks 2025 has ended.
                  Thank you for your interest!
                </p>
                <p>
                  Want to stay updated about CDTM hackathons, applications,
                  events and more?{' '}
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
              </>
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationsClosedDialog;
