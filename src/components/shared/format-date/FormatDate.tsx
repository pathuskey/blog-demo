interface FormatDateProps {
  date: number | Date | undefined;
  locale?: string;
}

export const formatDateFunc = ({ date, locale }: FormatDateProps) => {
  if (!locale || !date) return null;

  return new Intl.DateTimeFormat(locale, {
    dateStyle: 'long',
  }).format(new Date(date));
};

export const FormatDate = (props: FormatDateProps) => {
  return <>{formatDateFunc({ ...props })}</>;
};
