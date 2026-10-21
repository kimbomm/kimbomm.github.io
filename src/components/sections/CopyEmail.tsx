'use client';

import { useState } from 'react';
import styles from './CopyEmail.module.css';

type Status = 'idle' | 'copied' | 'failed';

const LABEL: Record<Status, string> = {
  idle: '이메일 복사',
  copied: '복사됨',
  failed: '직접 선택해서 복사하세요',
};

export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>('idle');

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setStatus('copied');
    } catch {
      setStatus('failed');
    }
    setTimeout(() => setStatus('idle'), 1800);
  };

  return (
    <>
      <code className={styles.email}>{email}</code>
      <button type="button" className={styles.button} onClick={copy}>
        {LABEL[status]}
      </button>
    </>
  );
}
