import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { SmileIcon } from 'lucide-react'

import { useTheme } from '@/components/theme/theme-provider'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

interface EmojiPickerProps {
  onChange: (value: string) => void
}

export const EmojiPicker = ({ onChange }: EmojiPickerProps) => {
  const { theme } = useTheme()

  return (
    <Popover>
      <PopoverTrigger>
        <SmileIcon className="h-5 w-5 text-muted-foreground transition hover:text-foreground" />
      </PopoverTrigger>
      <PopoverContent className="w-full">
        <Picker
          emojiSize={18}
          theme={theme || 'light'}
          data={data}
          maxFrequentRows={1}
          onEmojiSelect={(emoji: any) => onChange(emoji.native)}
          locale="pt"
          showSkinTones={true}
        />
      </PopoverContent>
    </Popover>
  )
}
