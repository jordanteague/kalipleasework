import { useContext } from 'react';
import AppContext from '../context/AppContext';
import {
  chakra,
  Input,
  Button,
  Text,
  Flex,
  Box,
  Select,
  Badge,
  Grid,
  Icon,
  IconButton,
  Stack,
  HStack,
  VStack,
  Spacer,
  Center,
  Divider,
  Progress
} from "@chakra-ui/react";
import {
  BsHandThumbsUpFill,
  BsHandThumbsDownFill,
  BsFillPersonPlusFill,
  BsFillPersonXFill,
  BsFillMegaphoneFill,
} from "react-icons/bs";
import FlexOutline from './FlexOutline';
import Counter from  './Counter';

export default function ProposalRow(props) {
  const value = useContext(AppContext);
  const { web3, loading } = value.state;
  const p = props['p'];

  return(
    <Box border="1px solid" borderColor="black" margin="2" padding="10">
      <VStack>
        <Icon as={BsFillPersonPlusFill} />
        <Text>Membership</Text>
        <Progress width="100%" colorScheme='green' backgroundColor='pink' value={80} />
        <Divider w="80%" align="center" />
        <Text>{p['description']}</Text>
        <Divider w="80%" align="center" />

        {p["open"] ? <Text>VOTE:</Text> : null}

        <HStack>
            {p["open"] ? (
              <>
                <form onSubmit={props.vote}>
                  <Input
                    type="hidden"
                    name="dao"
                    value={props['address']}
                  />
                  <Input type="hidden" name="id" value={p["id"]} />
                  <Input type="hidden" name="approval" value={1} />
                  <IconButton
                    icon={<BsHandThumbsUpFill />}
                    type="submit"
                  />
                </form>

                <form onSubmit={props.vote}>
                  <Input
                    type="hidden"
                    name="dao"
                    value={props['address']}
                  />
                  <Input type="hidden" name="id" value={p["id"]} />
                  <Input type="hidden" name="approval" value={0} />
                  <IconButton
                    icon={<BsHandThumbsDownFill />}
                    type="submit"
                  />
                </form>
              </>
            ) : (
              <>
                <form onSubmit={props.process}>
                  <Input
                    type="hidden"
                    name="dao"
                    value={props['address']}
                  />
                  <Input type="hidden" name="id" value={p["id"]} />
                  <Button type="submit">Process</Button>
                </form>
              </>
            )}
          </HStack>

      </VStack>
    </Box>
  )
}
