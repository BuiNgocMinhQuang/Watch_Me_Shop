import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51Lk2tbKIKmQb68mKgAcJncGaHgzs6M87CZ78vGsnddx8tPigmWnonyrIsBu6v1LJ5GhT3zQJUm5qWIXkDnMpCxS200tkSfDtBs"
    );
  }

  return stripePromise;
};

export default getStripe;
