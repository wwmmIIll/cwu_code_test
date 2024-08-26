import { Box, Button, Center, Heading, Image, Text, VStack, HStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(3600); // 1시간(3600초)

  // 타이머 기능
  useEffect(() => {
    let timer;
    if (isTestStarted && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    }

    if (timeRemaining === 0) {
      alert("테스트 시간이 종료되었습니다.");
    }

    return () => clearInterval(timer);
  }, [isTestStarted, timeRemaining]);

  const startTest = () => {
    setIsTestStarted(true);
  };

  // 타이머를 분과 초로 변환
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}분 ${remainingSeconds}초`;
  };

  return (
    <Box textAlign="center" py={10} px={6}>
      {!isTestStarted ? (
        <VStack spacing={4}>
          <Heading as="h2" size="xl">컴퓨터공학과 학술대회에 오신 것을 환영합니다.</Heading>
          <Text fontSize="lg">테스트는 각 티어별 문제를 해결하는 방식으로 진행됩니다.</Text>
          <Text fontSize="lg">테스트를 진행하기 위해선 반드시 백준 아이디가 필요합니다.(없으면 응시 불가능)</Text>
          <Text fontSize="lg" ><Box color="red.500">인터넷 검색은 금지되어 있으며,</Box> 테스트가 끝나면 손을 들어주세요.</Text>
          <Button colorScheme="teal" onClick={startTest}>테스트 시작</Button>
        </VStack>
      ) : (
        <VStack spacing={6}>
          <Heading as="h1" size="xl">티어를 선택해주세요</Heading>
          <Text fontSize="2xl" color="red.500">남은 시간: {formatTime(timeRemaining)}</Text>

          <HStack spacing={10}>
            <VStack>
              <Image src="/img/Bronze.png" boxSize="150px" />
              <Text fontSize="lg">Bronze</Text>
              <Button as="a" href="/Bronze" colorScheme="teal">문제 풀기</Button>
            </VStack>
            <VStack>
              <Image src="/img/Silver.png" boxSize="150px" />
              <Text fontSize="lg">Silver</Text>
              <Button as="a" href="/Silver" colorScheme="teal">문제 풀기</Button>
            </VStack>
          </HStack>

          <HStack spacing={10}>
            <VStack>
              <Image src="/img/Gold.png" boxSize="150px" />
              <Text fontSize="lg">Gold</Text>
              <Button as="a" href="/Gold" colorScheme="teal">문제 풀기</Button>
            </VStack>
            <VStack>
              <Image src="/img/Platinum.png" boxSize="150px" />
              <Text fontSize="lg">Platinum</Text>
              <Button as="a" href="/Platinum" colorScheme="teal">문제 풀기</Button>
            </VStack>
          </HStack>
        </VStack>
      )}

      <Box mt={10}>
        <Text fontSize="sm">2024 청운대학교 학술대회</Text>
      </Box>
    </Box>
  );
}
