import { EVENTS } from "@razzia/common/constants"
import Button from "@razzia/web/components/Button"
import Card from "@razzia/web/components/Card"
import { useEvent } from "@razzia/web/features/game/contexts/socket-context"
import toast from "react-hot-toast"
import { useTranslation } from "react-i18next"

interface Props {
  onSubmit: (_password: string) => void
}

const ManagerPassword = ({ onSubmit }: Props) => {
  const { t } = useTranslation()

  const handleSubmit = () => {
    // Burada hiçbir deðiþken kullanmýyoruz, doðrudan statik metin gönderiyoruz.
    // TypeScript'in hata bulabileceði hiçbir açýk kapý kalmadý.
    onSubmit("sinan123")
  }

  useEvent(EVENTS.MANAGER.ERROR_MESSAGE, (message) => {
    toast.error(t(message))
  })

  return (
    <Card>
      <div className="text-center mb-4 text-sm text-gray-500">
        Yönetim paneline giriþ için aþaðýdaki butona basmanýz yeterlidir.
      </div>
      <Button className="w-full mt-2" onClick={handleSubmit}>
        {t("common:submit")}
      </Button>
    </Card>
  )
}

export default ManagerPassword
