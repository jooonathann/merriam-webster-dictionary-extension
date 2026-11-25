import React from "react";
import {
  Accordion,
  Anchor,
  Badge,
  Card,
  Divider,
  Group,
  Stack,
  Text,
  Title
} from "@mantine/core";
import { useSearch } from "../../../../../../context/data.context";
import { mwToIpa } from "../../../../../../utils/mwToIpa";
import { splitIpaIntoSymbols } from "../../../../../../utils/splitIpaIntoSymbols";
import { IPA_SYMBOLS } from "../../../../../../constants/ipaSymbols";
import { IpaSymbol, IpaSymbolType } from "../../../../../../types";
import ActionButtons from "../../ActionBar/ActionBar";

const IPA_GROUPS: IpaSymbolType[] = ["Vowel", "Diphthong", "Consonant"];

const SymbolDetails = ({ symbol }: { symbol: IpaSymbol }) => (
  <Stack gap="xs">
    <Text size="sm">{symbol.howTo}</Text>
    <Anchor
      href={symbol.wikiUrl}
      target="_blank"
      rel="noreferrer"
      size="xs"
    >
      {`Learn how to pronounce /${symbol.symbol}/`}
    </Anchor>
  </Stack>
);

// TODO: Fix Vite HMR with named function components and name this component properly
// eslint-disable-next-line react/display-name
export default function () {
  const { searchFor, result } = useSearch();

  const pronouncedEntry = result?.find(item => item.pron);
  const wordIpa = mwToIpa(pronouncedEntry?.pron);
  const wordSymbols = splitIpaIntoSymbols(wordIpa);

  return (
    <Stack px="sm" gap="md">
      {!!wordIpa && (
        <>
          <Stack gap="xs">
            <Title order={5}>{`IPA for "${searchFor}"`}</Title>
            <Text size="sm" fw="bold">{`/${wordIpa}/`}</Text>

            <Stack gap="xs">
              {wordSymbols.map(({ symbol, entry }, index) => (
                <Card key={`${symbol}-${index}`} withBorder padding="sm">
                  {entry
                    ? (
                        <Stack gap="xs">
                          <Group gap="xs" wrap="nowrap">
                            <Badge
                              variant="light"
                              size="lg"
                              color="grape"
                              miw={56}
                              tt="none"
                              style={{ flexShrink: 0 }}
                            >
                              {`/${entry.symbol}/`}
                            </Badge>
                            <div>
                              <Text size="sm" fw="bold">{entry.name}</Text>
                              <Text size="xs" c="dimmed">{`as in "${entry.example}"`}</Text>
                            </div>
                          </Group>
                          <SymbolDetails symbol={entry} />
                        </Stack>
                      )
                    : (
                        <Group gap="xs">
                          <Badge
                            variant="light"
                            size="lg"
                            color="grape"
                            miw={56}
                            tt="none"
                            style={{ flexShrink: 0 }}
                          >
                            {`/${symbol}/`}
                          </Badge>
                          <Text size="xs" c="dimmed">No reference entry for this symbol.</Text>
                        </Group>
                      )}
                </Card>
              ))}
            </Stack>
          </Stack>

          <Divider />
        </>
      )}

      <Stack gap="xs">
        <Title order={5}>English IPA symbols (General American)</Title>
        <Text size="xs" c="dimmed">
          Select a symbol to see its phonetic name, example word, and how to pronounce it.
        </Text>

        {IPA_GROUPS.map(group => (
          <div key={group}>
            <Text size="sm" fw="bold" mb="xs">
              {group}
              s
            </Text>
            <Accordion variant="separated" multiple>
              {IPA_SYMBOLS.filter(symbol => symbol.type === group).map(symbol => (
                <Accordion.Item key={symbol.symbol} value={symbol.symbol}>
                  <Accordion.Control>
                    <Group gap="xs" wrap="nowrap">
                      <Badge
                        variant="light"
                        size="lg"
                        color="grape"
                        miw={56}
                        tt="none"
                        style={{ flexShrink: 0 }}
                      >
                        {`/${symbol.symbol}/`}
                      </Badge>
                      <div>
                        <Text size="sm" fw="bold">{symbol.name}</Text>
                        <Text size="xs" c="dimmed">{`as in "${symbol.example}"`}</Text>
                      </div>
                    </Group>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <SymbolDetails symbol={symbol} />
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        ))}
      </Stack>

      <ActionButtons />
    </Stack>
  );
};
