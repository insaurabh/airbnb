'use client';
import { useState, useEffect,useCallback } from "react";
interface ModelProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: string;
    footer?: string;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: string;
    secondaryLabel?: string;
}
const Model: React.FC<ModelProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryLabel
}) => {
    const [showModel, setShowModel] = useState(isOpen);

    useEffect(() => {
        setShowModel(isOpen);
    }, [isOpen])

    const handleClose = useCallback(() => {
        if(disabled) {
            return
        }
        setShowModel(false);
        setTimeout(() => {
            onClose()
        }, 300)
      },[disabled, onClose] )

      const handleSubmit = useCallback(() =>{
          if (disabled) { return }
          onSubmit();
      }, [disabled, onSubmit])

    return (
        <>Hello</>
    )
}

export default Model;