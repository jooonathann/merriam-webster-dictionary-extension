import React from "react";
import { ActionIcon, Anchor, Flex, Group, Text, Tooltip, useComputedColorScheme } from "@mantine/core";
import { FiGithub } from "react-icons/fi";
import { useActiveSection } from "../../../../../context/data.context";

// TODO: Fix Vite HMR with named function components and name this component properly
// eslint-disable-next-line react/display-name
export default function () {
  const colorScheme = useComputedColorScheme("dark");
  const { setActiveSection } = useActiveSection();

  return (
    <Flex justify="space-between" p="sm" bg={colorScheme === "light" ? "gray.0" : "dark.8"}>
      <Anchor
        href="https://www.merriam-webster.com/"
        target="_blank"
        rel="noreferrer"
        underline="never"
        fw="bold"
        size="sm"
        style={{
          display: "inline-flex",
          alignItems: "center"
        }}
        c={colorScheme === "light" ? "gray.8" : "blue.1"}
      >
        Merriam-Webster' dictionary
      </Anchor>

      <Group gap="xs">
        <Tooltip label={<Text size="xs">IPA symbols</Text>}>
          <ActionIcon
            variant="subtle"
            c="blue"
            onClick={() => {
              setActiveSection("NewPage");
            }}
            aria-label="IPA symbols"
          >
            <span style={{ fontSize: 20, fontWeight: 700, lineHeight: 1 }}>ə</span>
          </ActionIcon>
        </Tooltip>

        <Tooltip label={<Text size="xs">View on GitHub</Text>}>
          <ActionIcon
            variant="subtle"
            c="green"
            onClick={() => {
              window.open("https://github.com/behnamazimi/merriam-webster-dictionary-extension", "_blank");
            }}
          >
            <FiGithub size={18} />
          </ActionIcon>
        </Tooltip>
      </Group>
    </Flex>
  );
}
