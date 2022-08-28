import { Text, VStack } from "@chakra-ui/react";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { useDeepL } from "../../deepl";

type Props = {
  text: string;
};
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { text } = query;
  return {
    props: {
      text,
    },
  };
};

const DeepL: NextPage<Props> = ({ text }) => {
  const translated = useDeepL(text);
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <Text top={136} fontSize="xl" fontWeight="bold">
        {translated}
      </Text>
    </VStack>
  );
};
export default DeepL;
