import { Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { User } from 'lucide-react'
import React from 'react'

interface AccountTypeOption {
    id: string
    icon: React.ReactNode
    label: string
}

type AccountTypeValue = 'EMPLOYER' | 'CANDIDATE'

interface AccountTypeProps {
    value: AccountTypeValue | null
    onValueChange: (value: AccountTypeValue) => void
    options?: AccountTypeOption[]
    className?: string
}

const defaultOptions: AccountTypeOption[] = [
    {
        id: 'CANDIDATE',
        icon: <User className="h-4 w-4" />,
        label: 'Candidate'
    },
    {
        id: 'EMPLOYER',
        icon: <Building2 className="h-4 w-4" />,
        label: 'Employer'
    }
]

const AccountType = React.forwardRef<HTMLDivElement, AccountTypeProps>(
    ({ value, onValueChange, options = defaultOptions, className }, ref) => {
        return (
            <div ref={ref} className={`bg-gray-50 p-1 rounded-lg grid grid-cols-${options.length} gap-1 ${className || ''}`}>
                {options.map((option) => (
                    <Button
                        key={option.id}
                        variant={value === option.id ? 'default' : 'ghost'}
                        className="w-full justify-center gap-2"
                        onClick={() => onValueChange(option.id as AccountTypeValue)}
                    >
                        {option.icon}
                        {option.label}
                    </Button>
                ))}
            </div>
        )
    }
)

AccountType.displayName = "AccountType"

export default AccountType