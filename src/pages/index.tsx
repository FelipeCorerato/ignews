import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import styles from './home.module.scss';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

interface Props {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: Props) {
  return (
    <>
      <Head>
        <title>ig.news</title>
      </Head>
      
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Olá, bem-vindo</span>
          <h1>Notícias sobre o mundo <span>React</span>.</h1>
          <p>
            <span>Tenha acesso a todas as publicações</span> <br />
            <span className={styles.secondaryText}>por {product.amount} mensais</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <Image src="/images/avatar.svg" alt="Coding" height={650} width={650} />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async() => {
  const price = await stripe.prices.retrieve('price_1K0SuWH5r3Eexa7KV04UJKx8');

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', { 
      style: 'currency', 
      currency: 'BRL',
    }).format(price.unit_amount / 100),
  }

  return{
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 horas
  };
};
