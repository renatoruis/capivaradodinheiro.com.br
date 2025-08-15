import { format, formatDistanceToNow, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

/**
 * Composable para formatação de datas
 * Usa date-fns para evitar problemas de hidratação
 */
export const useDate = () => {
  /**
   * Formata uma data para exibição padrão
   * @param date - Data em string ISO ou objeto Date
   * @returns Data formatada (ex: "18 de dezembro de 2023")
   */
  const formatDate = (date: string | Date): string => {
    try {
      const dateObj = typeof date === 'string' ? parseISO(date) : date
      return format(dateObj, "d 'de' MMMM 'de' yyyy", { locale: ptBR })
    } catch (error) {
      console.warn('Erro ao formatar data:', error)
      return 'Data inválida'
    }
  }

  /**
   * Formata uma data de forma compacta
   * @param date - Data em string ISO ou objeto Date
   * @returns Data formatada (ex: "18/12/2023")
   */
  const formatDateShort = (date: string | Date): string => {
    try {
      const dateObj = typeof date === 'string' ? parseISO(date) : date
      return format(dateObj, 'dd/MM/yyyy', { locale: ptBR })
    } catch (error) {
      console.warn('Erro ao formatar data:', error)
      return 'Data inválida'
    }
  }

  /**
   * Formata uma data de forma relativa
   * @param date - Data em string ISO ou objeto Date
   * @returns Data relativa (ex: "há 3 dias")
   */
  const formatDateRelative = (date: string | Date): string => {
    try {
      const dateObj = typeof date === 'string' ? parseISO(date) : date
      return formatDistanceToNow(dateObj, { 
        addSuffix: true, 
        locale: ptBR 
      })
    } catch (error) {
      console.warn('Erro ao formatar data relativa:', error)
      return 'Data inválida'
    }
  }

  /**
   * Formata data para ISO string (útil para structured data)
   * @param date - Data em string ISO ou objeto Date
   * @returns Data em formato ISO
   */
  const formatDateISO = (date: string | Date): string => {
    try {
      const dateObj = typeof date === 'string' ? parseISO(date) : date
      return dateObj.toISOString()
    } catch (error) {
      console.warn('Erro ao formatar data ISO:', error)
      return new Date().toISOString()
    }
  }

  /**
   * Verifica se uma data é válida
   * @param date - Data para validar
   * @returns Boolean indicando se a data é válida
   */
  const isValidDate = (date: string | Date): boolean => {
    try {
      const dateObj = typeof date === 'string' ? parseISO(date) : date
      return !isNaN(dateObj.getTime())
    } catch {
      return false
    }
  }

  return {
    formatDate,
    formatDateShort,
    formatDateRelative,
    formatDateISO,
    isValidDate
  }
}
