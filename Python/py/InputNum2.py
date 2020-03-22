"""Return the number of Celsius degrees equivalent to Fahrenheit degrees.

Args:
    fahrenheit (int|float): value in Fahrenheit degrees.

Returns:
    float: value in Celsius degrees.

Examples:
    >>> convert_to_celsius(32)
    0.0
    >>> convert_to_celsius(212)
    100.0

"""

return (fahrenheit - 32) * 5 / 9.0
