import React from 'react';
import jwt from 'jsonwebtoken';

type Props = {
  siteUrl: string;
  secretKey: string;
  config?: {
    resource?: {
      question?: number;
    };
    params: Record<string, number | string>;
  };
  questionOptions?: string;
};

const Question = ({ siteUrl, secretKey, config, questionOptions }: Props) => {
  const payload = {
    ...config,
    exp: Math.round(Date.now() / 1000) + 10 * 60, // 10 minute expiration
  };

  const token = jwt.sign(payload, secretKey);

  const iframeUrl = siteUrl + '/embed/question/' + token + questionOptions;

  return (
    <iframe
      src={iframeUrl}
      title="Metabase"
      style={{ border: 'none', width: '100%', height: '100%' }}
    />
  );
};

export default Question;
