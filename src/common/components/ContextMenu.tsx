import styled from "@emotion/styled";

interface ContextMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  mouseCordinates: { x: number; y: number };
}

const ContextMenu = ({
  isOpen,
  onClose,
  children,
  mouseCordinates,
}: ContextMenuProps) => {
  if (!isOpen) return null;

  const ContextOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    top: 0;
    left: 0;
    z-index: 3;
  `;

  return (
    <ContextOverlay onClick={onClose}>
      <div
        css={{
          position: "absolute",
          top: mouseCordinates.y,
          left: mouseCordinates.x,
        }}
      >
        {children}
      </div>
    </ContextOverlay>
  );
};

export default ContextMenu;
