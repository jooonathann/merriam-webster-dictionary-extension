import OpenInWebsite from "../OpenInWebsite/OpenInWebsite";
import React, { FC } from "react";
import { LookupResultType, LookupResultItem } from "../../../types";
import { Accordion, Button, Divider, Group, List, Stack, Text, useComputedColorScheme, ActionIcon, CopyButton, Tooltip } from "@mantine/core";
import { FiVolume2, FiCopy, FiCheck } from "react-icons/fi";
import { mwToIpa } from "../../../utils/mwToIpa";

const Pron: FC<{
  item: LookupResultItem;
}> = ({ item }) => {
  const handlePronPlay = () => {
    if (item.sound) {
      new Audio(item.sound).play();
    }
  };

  if (!item.pron) {
    return null;
  }

  const ipa = mwToIpa(item.pron);

  return (
    <Stack gap="xs" mb="xs">
      {!!ipa && (
        <Group gap="xs" align="center">
          <Button
            variant="light"
            color="teal"
            size="xs"
            leftSection={<FiVolume2 size={16} />}
            onClick={handlePronPlay}
          >
            <span>{`/${ipa}/`}</span>
          </Button>
          <CopyButton value={ipa}>
            {({ copied, copy }) => (
              <Tooltip label={copied ? "Copied" : "Copy international IPA"}>
                <ActionIcon
                  variant="light"
                  size={30}
                  color="teal"
                  onClick={copy}
                >
                  {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
                </ActionIcon>
              </Tooltip>
            )}
          </CopyButton>
        </Group>
      )}
      <Group gap="xs" align="center">
        <Button
          variant="light"
          size="xs"
          leftSection={<FiVolume2 size={16} />}
          onClick={handlePronPlay}
        >
          <span>{item.pron}</span>
        </Button>
        <CopyButton value={item.pron}>
          {({ copied, copy }) => (
            <Tooltip label={copied ? "Copied" : "Copy pronunciation"}>
              <ActionIcon
                variant="light"
                size={30}
                color={copied ? "teal" : "blue"}
                onClick={copy}
              >
                {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
              </ActionIcon>
            </Tooltip>
          )}
        </CopyButton>
      </Group>
    </Stack>
  );
};

type LookupResultProps = {
  searchFor: string;
  result: LookupResultType | null;
};

// TODO: Fix Vite HMR with named function components and name this component properly
// eslint-disable-next-line react/display-name
export default function ({ searchFor, result = [] }: LookupResultProps) {
  const colorScheme = useComputedColorScheme("dark");

  const items = result?.filter(item => item.shortDef).map((item, index) => {
    const [id, num] = item.id.split(":");

    return (
      <Accordion.Item value={item.id} key={index} p={0}>
        <Accordion.Control
          py={0}
          bg={colorScheme === "light" ? "gray.0" : "gray.8"}
        >
          <Group gap="xs" wrap="nowrap">
            {!!num && (
              <span>
                {num}
                {": "}
              </span>
            )}
            <strong>{id}</strong>
            <small>
              (
              {item.type}
              )
            </small>
          </Group>
        </Accordion.Control>
        <Accordion.Panel>
          {!!item.pron && <Pron item={item} />}
          {!!item.synonyms
          && (
            <Text c="teal" mt="xs">
              Synonyms:
              {" "}
              {item.synonyms.join(", ")}
              <Divider my="xs" />
            </Text>
          )}
          <List
            withPadding={false}
            styles={{
              itemWrapper: {
                width: "calc(100% - 15px)"
              }
            }}
          >
            {item.shortDef.map((d: string, index: number) => (
              <List.Item key={index}>{d}</List.Item>
            ))}
          </List>

          {!!item.examples?.length
          && (
            <>
              <Divider my="xs" />
              <Stack gap="4">
                <Text size="sm" opacity={0.8}>
                  Examples:
                </Text>
                <List>
                  {item.examples.map((ex: string, index: number) => (
                    <List.Item
                      key={index}
                    >
                      <Text
                        size="sm"
                        dangerouslySetInnerHTML={
                          {
                            __html: ex
                              .replaceAll("{it}", "<strong>").replaceAll("{/it}", "</strong>")
                              .replaceAll("{wi}", "<strong>").replaceAll("{/wi}", "</strong>")
                          }
                        }
                      />
                    </List.Item>
                  ))}
                </List>
              </Stack>
            </>
          )}
        </Accordion.Panel>
      </Accordion.Item>
    );
  });

  return (
    <Stack gap="sm">
      <OpenInWebsite target={searchFor} notSticky />
      <Accordion
        chevronPosition="right"
        multiple
        variant="separated"
        defaultValue={result?.map(item => item.id)}
        styles={{
          label: {
            padding: "4px 0"
          }
        }}
      >
        {items}
      </Accordion>
    </Stack>
  );
};
