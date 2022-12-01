// @ts-ignore
import MailchimpForm from 'react-mailchimp-form';

import { MailChimpProps } from '@/lib/types';

const Mailchimp = ({ heading, subtitle, actionUrl }: MailChimpProps) => {
  return (
    <section>
      <div>
        <h2>{heading}</h2>
        <p>{subtitle}</p>
        {actionUrl && (
          <MailchimpForm
            action={actionUrl}
            fields={[
              {
                name: 'EMAIL',
                placeholder: 'Email',
                type: 'email',
                required: true,
              },
            ]}
            button
            styles={{
              sendingMsg: {
                color: '#0652DD',
              },
              successMsg: {
                color: '#009432',
              },
              duplicateMsg: {
                color: '#EE5A24',
              },
              errorMsg: {
                color: 'red',
              },
            }}
            messages={{
              sending: 'Sending...',
              success: 'Thank you for subscribing!',
              error: 'An unexpected internal error has occurred.',
              empty: 'You must write an e-mail.',
              duplicate: 'Already subscribed',
              button: 'Subscribe!',
            }}
          />
        )}
      </div>
    </section>
  );
};

export default Mailchimp;
