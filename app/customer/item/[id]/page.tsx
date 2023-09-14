'use client';

import { useEffect, useState } from 'react';
import Expression from './Expression';
import { useAuthStore, FAILED, FETCHED } from '@/store/auth';

export default function customerItem({ params }: { params: { id: string } }) {
  const { customer_status } = useAuthStore();

  const { id } = params;
  const [smile, setSmile] = useState<any>();
  const [laugh, setLaugh] = useState<any>();
  const [openEye, setOpenEye] = useState<any>();
  const [closeEye, setCloseEye] = useState<any>();

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/customer/item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
        }),
      });
      const { succeeded, result } = await response.json();

      if (!succeeded) {
      } else {
        setSmile(result.smile);
        setLaugh(result.laugh);
        setOpenEye(result.openEye);
        setCloseEye(result.closeEye);
      }
    })();
  }, [smile, laugh, openEye, closeEye]);

  if (customer_status === FAILED) {
    return <main>로그인을 하셔야 합니다.</main>;
  }

  if (customer_status === FETCHED) {
    return (
      <div>
        <Expression bundle={smile} type={'smile'} />
        <Expression bundle={laugh} type={'laugh'} />
        <Expression bundle={openEye} type={'openEye'} />
        <Expression bundle={closeEye} type={'closeEye'} />
      </div>
    );
  }

  return <main>로딩 중</main>;
}
