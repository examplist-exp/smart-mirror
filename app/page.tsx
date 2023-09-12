import Link from 'next/link';
import style from '@/styles/home/page.module.scss';

export default function Home() {
  return (
    <main className={style['main']}>
      <h1 className={style['greet']}>안녕하세요? 스마트미러입니다.</h1>
      <div className={style['links']}>
        <Link href={'/customer'}>고객 페이지로</Link>
        <Link href={'/admin'}>관리자 페이지로</Link>
      </div>
    </main>
  );
}