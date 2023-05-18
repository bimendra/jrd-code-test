export default interface RequestQuoteFormSubmissionData {
  firstName: string;
  lastName: string;
  email: string;
  channel: {
    key: string;
    label: string;
  };
  price: number;
  travelDate: string;
  requestMeetAndGreet: boolean;
}
