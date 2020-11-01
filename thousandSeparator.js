/**
 *
 * 1556. Thousand Separator
 * github: theketan2
 * https://leetcode.com/problems/thousand-separator/
 */

const thousandSeparator = (n) => n.toLocaleString().replace(/[,]/g, ".");
