"""
Layered Cryptography: Love Letter Encryption System
This script encrypts the love letter using the 3x3 matrix A
"""

import numpy as np

# The encryption matrix A
A = np.array([
    [4, 1, 0],
    [1, 4, 1],
    [0, 1, 4]
], dtype=float)

# The inverse matrix (for decryption verification)
A_inv = (1/56) * np.array([
    [15, -4, 1],
    [-4, 16, -4],
    [1, -4, 15]
], dtype=float)

# Character mapping
def char_to_num(c):
    """Convert character to number"""
    c = c.lower()
    if c.isalpha():
        return ord(c) - ord('a')  # a=0, b=1, ..., z=25
    elif c == ' ':
        return 26
    elif c == ',':
        return 27
    elif c == '.':
        return 28
    elif c == "'":
        return 29
    elif c == '"':
        return 30
    elif c == '!':
        return 31
    elif c == '?':
        return 32
    elif c == '-':
        return 33
    elif c == ':':
        return 34
    elif c == ';':
        return 35
    else:
        return 36  # catch-all for other characters

def num_to_char(n):
    """Convert number back to character"""
    n = int(round(n))  # Handle floating point errors
    if 0 <= n <= 25:
        return chr(n + ord('a'))
    elif n == 26:
        return ' '
    elif n == 27:
        return ','
    elif n == 28:
        return '.'
    elif n == 29:
        return "'"
    elif n == 30:
        return '"'
    elif n == 31:
        return '!'
    elif n == 32:
        return '?'
    elif n == 33:
        return '-'
    elif n == 34:
        return ':'
    elif n == 35:
        return ';'
    else:
        return '~'  # catch-all

def text_to_vectors(text):
    """Convert text to list of 3D vectors"""
    # Convert all characters to numbers
    numbers = [char_to_num(c) for c in text]
    
    # Pad to make length divisible by 3
    while len(numbers) % 3 != 0:
        numbers.append(26)  # pad with spaces
    
    # Group into vectors of length 3
    vectors = []
    for i in range(0, len(numbers), 3):
        vectors.append(np.array([numbers[i], numbers[i+1], numbers[i+2]], dtype=float))
    
    return vectors

def vectors_to_text(vectors):
    """Convert list of vectors back to text"""
    numbers = []
    for vec in vectors:
        numbers.extend(vec)
    
    text = ''.join([num_to_char(n) for n in numbers])
    return text.rstrip()  # Remove trailing spaces from padding

def encrypt(plaintext):
    """Encrypt plaintext using matrix A"""
    vectors = text_to_vectors(plaintext)
    ciphertext_vectors = [A @ v for v in vectors]
    return ciphertext_vectors

def decrypt(ciphertext_vectors):
    """Decrypt ciphertext using A_inv"""
    plaintext_vectors = [A_inv @ c for c in ciphertext_vectors]
    return vectors_to_text(plaintext_vectors)

def format_ciphertext(ciphertext_vectors):
    """Format ciphertext vectors as a string to give to loved one"""
    lines = []
    for i, vec in enumerate(ciphertext_vectors):
        lines.append(f"[{int(round(vec[0]))}, {int(round(vec[1]))}, {int(round(vec[2]))}]")
    return ', '.join(lines)

# The love letter
love_letter = """My mouth hasn't shut up about you since you kissed it. The idea that you may kiss it again is stuck in my brain, which hasn't stopped thinking about you since, well, before any kiss. And now the prospect of those kiss seems to wind me like when you slip on the stairs and one of the steps hits you in the middle of the back. The notion of them continuin for what is traditionally terrifying forever excites me to an unfamiliar degree."""

# Encrypt the message
print("=" * 80)
print("LAYERED CRYPTOGRAPHY: LOVE LETTER ENCRYPTION")
print("=" * 80)
print()
print("Original Message:")
print("-" * 80)
print(love_letter)
print()
print("=" * 80)
print()

# Perform encryption
ciphertext_vectors = encrypt(love_letter)

print(f"Message Statistics:")
print(f"  - Character count: {len(love_letter)}")
print(f"  - Number of 3D vectors: {len(ciphertext_vectors)}")
print()
print("=" * 80)
print()

# Display the ciphertext
print("CIPHERTEXT TO GIVE TO YOUR LOVED ONE:")
print("=" * 80)
print()
print("Dear [Their Name],")
print()
print("I have encrypted a message for you using Linear Algebra.")
print("To decrypt it, you must:")
print()
print("1. Find the inverse of the encryption matrix A:")
print("   A = [[4, 1, 0],")
print("        [1, 4, 1],")
print("        [0, 1, 4]]")
print()
print("2. Apply A⁻¹ to each of the following ciphertext vectors:")
print()

# Print ciphertext in a nice format
for i in range(0, len(ciphertext_vectors), 5):
    batch = ciphertext_vectors[i:i+5]
    formatted = ', '.join([f"[{int(round(v[0]))},{int(round(v[1]))},{int(round(v[2]))}]" 
                           for v in batch])
    print(f"  {formatted}")

print()
print("3. Convert each resulting vector component back to characters using:")
print("   A-Z → 0-25, space → 26, punctuation → 27-36")
print()
print("4. Read the decrypted message and know how I feel.")
print()
print("With love,")
print("[Your Name]")
print()
print("=" * 80)
print()

# Verify decryption works
decrypted = decrypt(ciphertext_vectors)
print("VERIFICATION (Decryption Test):")
print("-" * 80)
print(decrypted)
print()

# Check if decryption matches original
if decrypted.strip() == love_letter.strip():
    print("✓ Decryption successful! The message is preserved perfectly.")
else:
    print("⚠ Warning: Decryption doesn't perfectly match original.")
    print(f"  Original length: {len(love_letter)}")
    print(f"  Decrypted length: {len(decrypted)}")

print()
print("=" * 80)

# Save ciphertext to a file for easy gifting
with open('/workspaces/crypotography/ciphertext_for_loved_one.txt', 'w') as f:
    f.write("=" * 80 + "\n")
    f.write("AN ENCRYPTED MESSAGE FOR YOU\n")
    f.write("=" * 80 + "\n\n")
    f.write("My Dearest,\n\n")
    f.write("I have hidden a message for you within these numbers.\n")
    f.write("To unlock it, you must journey through the mathematics of linear algebra.\n\n")
    f.write("The Encryption Matrix A:\n")
    f.write("  ⎡ 4  1  0 ⎤\n")
    f.write("  ⎢ 1  4  1 ⎥\n")
    f.write("  ⎣ 0  1  4 ⎦\n\n")
    f.write("Your Quest:\n")
    f.write("  1. Find the inverse matrix A⁻¹ using Gauss-Jordan elimination\n")
    f.write("  2. Multiply A⁻¹ by each ciphertext vector below\n")
    f.write("  3. Convert numbers back to letters: a=0, b=1, ..., z=25, space=26\n\n")
    f.write("The Ciphertext Vectors:\n")
    f.write("-" * 80 + "\n")
    
    for i in range(0, len(ciphertext_vectors), 5):
        batch = ciphertext_vectors[i:i+5]
        formatted = ', '.join([f"[{int(round(v[0]))},{int(round(v[1]))},{int(round(v[2]))}]" 
                               for v in batch])
        f.write(f"{formatted}\n")
    
    f.write("-" * 80 + "\n\n")
    f.write("Hint: The eigenvalues of A are λ₁ = 4, λ₂ = 4+√2, λ₃ = 4-√2\n")
    f.write("These represent the heart, the expansion, and the grounding of transformation.\n\n")
    f.write("Once you decrypt this message, you will know what's in my heart.\n\n")
    f.write("Forever yours in every coordinate system,\n")
    f.write("[Your Name Here]\n\n")
    f.write("=" * 80 + "\n")

print()
print("✓ Ciphertext has been saved to: ciphertext_for_loved_one.txt")
print()
