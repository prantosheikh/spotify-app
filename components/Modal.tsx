import * as Dialog from "@radix-ui/react-dialog";

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onChange,
  title,
  description,
  children,
}) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="bg-neutral-900/90 
            backdrop-blur-sm
            fixed
            inset-0
        "
        />
        <Dialog.Content
          className="
            fixed 
            drop-shadow-md
            border
            border-neutral-700
            top-[50%]
            left-[50%]
            max-h-full
            h-full
            md:h-auto
            md:max-h-[85vh]
            w-full
            md:w-[458px]
            translate-x-[-50%]
            translate-y-[-50%]
            rounded-lg
            bg-neutral-800
            p-[25px]
            focus:outline-none
            "
        >
          <Dialog.Title className="text-xl text-center font-bold mb-4">
            {title}
          </Dialog.Title>
          <Dialog.Description>{description}</Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
